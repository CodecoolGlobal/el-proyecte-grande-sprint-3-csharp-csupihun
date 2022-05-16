using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace ElProjecteGrande.Models
{
    public class DatingContext : DbContext
    {
        
        public DbSet<Dog> SavedDogs { get; set; }

        public DatingContext(DbContextOptions<DatingContext> options) : base(options)
        {
        }        
    }
}
