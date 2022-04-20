using ElProjecteGrande.Models;

namespace ElProjecteGrande.Services
{
    public class DogCreator
    {
        public static Dog CreateRandomDog()
        {
            int maxAge = 15;
            int nameIndex = new Random().Next(DogNames.Names.Count);
            string name = DogNames.Names[nameIndex];
            string breed= "placeholder";
            int age = new Random().Next(maxAge);
            List<string> sexes = new List<string>{ "male", "female" };
            int sexIndex = new Random().Next(sexes.Count);
            string sex = sexes[sexIndex];
            return new Dog(name, age, breed, sex);
        }
    }
}
