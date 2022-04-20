using ElProjecteGrande.Services;
using Microsoft.AspNetCore.Mvc;

namespace ElProjecteGrande.Controllers
{
    [ApiController]
    [Route("api")]
    public class APIController : ControllerBase
    {
        public DataManager DataManager;
        public APIController()
        {
            DataManager = DataManager.GetInstance;
        }

        [Route("getDog")]
        public async Task<IActionResult> GetDog(string url)
        {
            var dogDataString = GetApiData(url);
            var dogData = DataManager.ParseDogData(dogDataString.Result);
            return Ok(dogData);
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
