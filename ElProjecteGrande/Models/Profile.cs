namespace ElProjecteGrande.Models
{
    public class Profile : Dog
    {
        public Interests Interest { get; }
        public string Email { get; }
        public string Password { get; }
        public Profile(string name, int age, string breed, string sex, string picture, Interests interest, string email, string password)
            : base(name, age, breed, sex, picture)
        {
            Interest = interest;
            Email = email;
            Password = password;
        }
    }
}
