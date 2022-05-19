using ElProjecteGrande.Daos;
using ElProjecteGrande.Models;
using ElProjecteGrande.Services;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;

namespace ElProjecteGrande.Controllers
{
    [ApiController]
    [Route("api")]
    public class APIController : ControllerBase
    {
        private IDataManager DataManager;
        private IDogManager DogManager;
        private IDogCreator DogCreator;
        private Random random = new Random();
        public APIController(IDogCreator dogCreator, IDogManager dogManager, IDataManager dataManager)
        {
            DogCreator = dogCreator;
            DogManager = dogManager;
            DataManager = dataManager;
        }

        [Route("LikeDog")]
        public void LikeDog()
        {
            DataManager.AddCurrentDogToList();
        }

        [Route("getRandomDog")]
        public async Task<string> GetRandomDog()
        {
            string url = "https://dog.ceo/api/breeds/image/random";
            var dogDataString = GetApiData(url);
            var dogName = GetNameFromList();
            var dogData = DogManager.ParseDogData(dogDataString.Result);
            string dogBreed = DogManager.GetDogBreed(dogData["message"]);
            string capitalizedDogBreed = DogManager.CapitalizeDogBreed(dogBreed);
            string dogPicture = ChoosePicture(dogData["message"]);
            List<string> data = new List<string>() { capitalizedDogBreed, dogPicture, dogName};
            Dog newDog = DogCreator.CreateRandomDog(data);
            DataManager.currentDog = newDog;
            return JsonConvert.SerializeObject(newDog);
        }

        private string ChoosePicture(string picture)
        {
            var currentNum = random.Next(50);
            if (currentNum < 5)
            {
                return HumanPictures.pictures[currentNum];
            }
            return picture;
        }

        public async Task<string> GetApiData(string url, string header="")
        {
            using (var client = new HttpClient())
            {
                client.BaseAddress = new Uri(url);
                if (header != String.Empty)
                {
                    client.DefaultRequestHeaders.Add("X-Api-Key", header);
                }
                var responseTask = client.GetAsync(url);
                responseTask.Wait();

                var result = responseTask.Result;
                var stringResult = result.Content.ReadAsStringAsync();

                stringResult.Wait();

                var apiDataString = stringResult.Result;

                return apiDataString;
            }
        }

        public string GetNameFromList()
        {
            var random = new Random();
            var name = DogNames.Names[random.Next(20)];
            return name;
        }
        public string GetName()
        {
            string url = "https://randommer.io/api/Name?nameType=firstname&quantity=1";
            string key = "65ba9b3eef9a4af3a00d6b69ddde610c";
            var rawName = GetApiData(url, key).Result;
            return JsonConvert.DeserializeObject<List<string>>(rawName).First();
        }
    }
}
