using Newtonsoft.Json;
using System.Linq;

namespace ElProjecteGrande.Services
{
    public class DogManager : IDogManager
    {
        public Dictionary<string, string> ParseDogData(string dogString)
        {
            return JsonConvert.DeserializeObject<Dictionary<string, string>>(dogString);
        }

        public string GetDogBreed(string dogDataLink)
        {
            int breedIndex = 4;
            var linkParts = dogDataLink.Split("/");
            return linkParts[breedIndex];
        }

        public string CapitalizeDogBreed(string breed)
        {
            string capitalizedBreed;
            try
            {
                var splitBreed = breed.Split('-');
                string[] newBreed = new string[splitBreed.Length];
                int index = 1;
                foreach (var name in splitBreed)
                {
                    newBreed[index] = $"{char.ToUpper(name[0])}{name.Substring(1)}";
                    index--;
                }
                capitalizedBreed = string.Join(" ", newBreed);
            }
            catch
            {
                return $"{char.ToUpper(breed[0])}{breed.Substring(1)}";
            }
            return capitalizedBreed;
        }
    }
}
