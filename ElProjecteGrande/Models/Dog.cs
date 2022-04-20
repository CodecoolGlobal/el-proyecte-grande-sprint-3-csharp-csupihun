namespace ElProjecteGrande.Models
{
    public class Dog
    {
        public string Name { get; }
        public int Age { get; }
        public string Breed { get; }

        public string Sex { get; }

        public Dog(string name, int age, string breed, string sex)
        {
            Name = name;
            Age = age;
            Breed = breed;
            Sex = sex;
        }
    }
}
