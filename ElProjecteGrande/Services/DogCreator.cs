using ElProjecteGrande.Controllers;
using ElProjecteGrande.Models;

namespace ElProjecteGrande.Services
{
    public class DogCreator : IDogCreator
    {
        public Dog CreateRandomDog(List<string> dogData)
        {

            //Age data
            int maxAge = 15;
            int age = new Random().Next(maxAge);

            //Breed and Picture data
            string breed = dogData[0];
            string picture = dogData[1];

            //Name data
            int nameIndex = new Random().Next(DogNames.Names.Count);
            string name = dogData[2];

            //Sex data
            List<string> sexes = new List<string>{ "Male", "Female" };
            int sexIndex = new Random().Next(1, sexes.Count);
            string sex = sexes[sexIndex];

            return new Dog(name, age, breed, sex, picture);
        }
    }
}
