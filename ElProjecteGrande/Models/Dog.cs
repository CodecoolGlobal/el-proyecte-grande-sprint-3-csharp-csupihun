using System.ComponentModel.DataAnnotations.Schema;

namespace ElProjecteGrande.Models
{
    public class Dog
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public long ID { get; set; }
        public string Name { get; }
        public int Age { get; }
        public string Breed { get; }

        public string Sex { get; }
        public string Picture { get; }
        public Dog()
        {

        }

        public Dog(string Name, int Age, string Breed, string Sex, string Picture)
        {
            this.Name = Name;
            this.Age = Age;
            this.Breed = Breed;
            this.Sex = Sex;
            this.Picture = Picture;
        }
    }
}
