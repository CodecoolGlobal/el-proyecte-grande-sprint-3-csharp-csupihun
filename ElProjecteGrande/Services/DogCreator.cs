using ElProjecteGrande.Controllers;
using ElProjecteGrande.Models;

namespace ElProjecteGrande.Services
{
    public class DogCreator
    {
        public IServiceProvider serviceProvider;
        public Dog CreateRandomDog()
        {

            //Age data
            int maxAge = 15;
            int age = new Random().Next(maxAge);

            //Breed and Picture data
            APIController apiController = serviceProvider.GetService<APIController>();
            List<string> dogData = apiController.GetRandomDog().Result;
            string breed = dogData[0];
            string picture = dogData[1];

            //Name data
            int nameIndex = new Random().Next(DogNames.Names.Count);
            string name = dogData[2];

            //Sex data
            List<string> sexes = new List<string>{ "male", "female" };
            int sexIndex = new Random().Next(sexes.Count);
            string sex = sexes[sexIndex];

            return new Dog(name, age, breed, sex, picture);
        }
    }
}
