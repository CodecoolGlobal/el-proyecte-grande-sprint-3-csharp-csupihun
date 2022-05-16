namespace ElProjecteGrande.Services
{
    public interface IDogManager
    {
        Dictionary<string, string> ParseDogData(string dogString);
        string GetDogBreed(string dogDataLink);
        string CapitalizeDogBreed(string breed);
    }
}
