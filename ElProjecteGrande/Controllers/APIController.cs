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
        public DataManager DataManager;
        public DogManager DogManager;
        public DogCreator DogCreator;
        public APIController()
        {
            DogCreator = DogCreator.GetInstance;
            DogManager = DogManager.GetInstance;
            DataManager = DataManager.GetInstance;
        }

        [Route("getRandomDog")]
        public async Task<string> GetRandomDog()
        {
            string url = "https://dog.ceo/api/breeds/image/random";
            var dogDataString = GetApiData(url);
            var dogName = GetName();
            var dogData = DogManager.ParseDogData(dogDataString.Result);
            string dogBreed = DogManager.GetDogBreed(dogData["message"]);
            string dogPicture = dogData["message"];
            List<string> data = new List<string>() { dogBreed, dogPicture, dogName};
            Dog newDog = DogCreator.CreateRandomDog(data);
            return JsonConvert.SerializeObject(newDog);
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
        public string GetName()
        {
            string url = "https://randommer.io/api/Name?nameType=firstname&quantity=1";
            string key = "65ba9b3eef9a4af3a00d6b69ddde610c";
            var rawName = GetApiData(url, key).Result;
            return JsonConvert.DeserializeObject<List<string>>(rawName).First();
        }
    }
}
