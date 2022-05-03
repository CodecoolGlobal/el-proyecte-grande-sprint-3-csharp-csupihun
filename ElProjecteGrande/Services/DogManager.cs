﻿using Newtonsoft.Json;

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
    }
}
