using ElProjecteGrande.Controllers;
using ElProjecteGrande.Models;

namespace ElProjecteGrande.Services
{
    public class DogCreator
    {
        public static DogCreator Singleton { get; private set; }

        public static DogCreator GetInstance
        {
            get
            {
                if (Singleton == null)
                {
                    Singleton = new DogCreator();
                }
                return Singleton;
            }
        }

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
            List<string> sexes = new List<string>{ "male", "female" };
            int sexIndex = new Random().Next(sexes.Count);
            string sex = sexes[sexIndex];

            return new Dog(name, age, breed, sex, picture);
        }
    }
}
