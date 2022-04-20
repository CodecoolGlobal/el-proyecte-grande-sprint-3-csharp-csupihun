using ElProjecteGrande.Models;

namespace ElProjecteGrande.Services
{
    public class DogCreator
    {
        public static Dog CreateRandomDog()
        {
            string name = "placeholder";
            string breed= "placeholder";
            int age = new Random().Next(15);
            List<string> sexes = new List<string>{ "male", "female" };
            int sexIndex = new Random().Next(sexes.Count);
            string sex = sexes[sexIndex];
            return new Dog(name, age, breed, sex);
        }
    }
}
