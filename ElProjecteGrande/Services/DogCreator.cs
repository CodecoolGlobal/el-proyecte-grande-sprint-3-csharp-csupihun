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
            int age = new Random().Next(1, maxAge);

            //Breed and Picture data
            int breedIndex = 0;
            int pictureIndex = 1;
            string breed = dogData[breedIndex];
            string picture = dogData[pictureIndex];

            //Name data
            int nameIndex = 2;
            string name = dogData[nameIndex];

            //Sex data
            List<string> sexes = new List<string>{ "Male", "Female" };
            int sexIndex = new Random().Next(sexes.Count);
            string sex = sexes[sexIndex];

            return new Dog(name, age, breed, sex, picture);
        }
    }
}
