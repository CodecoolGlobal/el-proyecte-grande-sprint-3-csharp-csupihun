using ElProjecteGrande.Models;

namespace ElProjecteGrande.Services
{
    public interface IDogCreator
    {
        Dog CreateRandomDog(List<string> dogData);
    }
}
