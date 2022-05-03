using ElProjecteGrande.Models;
using Newtonsoft.Json;

namespace ElProjecteGrande.Services
{
    public class DataManager
    {
        List<Dog> SavedDogs = new List<Dog>();
        public Dog? currentDog { get; set; }
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
        public void AddCurrentDogToList()
        {
            SavedDogs.Add(currentDog);
        }
    }
}
