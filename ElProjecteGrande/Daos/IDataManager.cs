using ElProjecteGrande.Models;

namespace ElProjecteGrande.Daos
{
    public interface IDataManager
    {
        void AddCurrentDogToList();
        Dog? currentDog { get; set; }
    }
}
