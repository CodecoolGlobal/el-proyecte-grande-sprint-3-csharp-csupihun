using Newtonsoft.Json;

namespace ElProjecteGrande.Services
{
    public class DogManager
    {
        public static DogManager? Singleton { get; private set; } = null;

        public static DogManager GetInstance
        {
            get
            {
                if (Singleton == null)
                {
                    Singleton = new DogManager();
                }
                return Singleton;
            }
        }

        public Dictionary<string, string> ParseDogData(string dogString)
        {
            return JsonConvert.DeserializeObject<Dictionary<string, string>>(dogString);
        }

        public string GetDogBreed(string dogDataLink)
        {
            var linkParts = dogDataLink.Split("/");
            return linkParts[4];
        }
    }
}
