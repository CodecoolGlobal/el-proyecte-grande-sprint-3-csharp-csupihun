using Newtonsoft.Json;

namespace ElProjecteGrande.Services
{
    public class DataManager
    {
        public static DataManager? Singleton { get; private set; } = null;

        public static DataManager GetInstance
        {
            get
            {
                if (Singleton == null)
                {
                    Singleton = new DataManager();
                }
                return Singleton;
            }
        }

        public Dictionary<string, string> ParseDogData(string dogString)
        {
            return JsonConvert.DeserializeObject<Dictionary<string, string>>(dogString);
        }
    }
}
