﻿using ElProjecteGrande.Services;
using Microsoft.AspNetCore.Mvc;

namespace ElProjecteGrande.Controllers
{
    [ApiController]
    [Route("api")]
    public class APIController : ControllerBase
    {
        public DataManager DataManager;
        public DogManager DogManager;
        public APIController()
        {
            DogManager = DogManager.GetInstance;
            DataManager = DataManager.GetInstance;
        }

        [Route("getRandomDog")]
        public async Task<List<string>> GetRandomDog()
        {
            string url = "https://dog.ceo/api/breeds/image/random";
            var dogDataString = GetApiData(url);
            var dogData = DogManager.ParseDogData(dogDataString.Result);
            string dogBreed = DogManager.GetDogBreed(dogData["message"]);
            string dogPicture = dogData["message"];
            List<string> data = new List<string>() { dogBreed, dogPicture};
            return data;
        }

        public async Task<string> GetApiData(string url)
        {
            using (var client = new HttpClient())
            {
                client.BaseAddress = new Uri(url);
                var responseTask = client.GetAsync(url);
                responseTask.Wait();

                var result = responseTask.Result;
                var stringResult = result.Content.ReadAsStringAsync();

                stringResult.Wait();

                var apiDataString = stringResult.Result;

                return apiDataString;
            }
        }
    }
}
