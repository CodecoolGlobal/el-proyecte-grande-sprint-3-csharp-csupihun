namespace ElProjecteGrande.Services
{
    public static class Utils
    {
        public static string CapitalizeFirstLetter(string breed)
        {
            if (breed.Length == 0)
                return "";
            else if (breed.Length == 1)
                return $"{char.ToUpper(breed[0])}";
            else
                return $"{char.ToUpper(breed[0])}{breed.Substring(1)}";
        }
    }
}
