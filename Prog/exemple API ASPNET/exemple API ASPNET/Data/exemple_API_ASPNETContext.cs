using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using exemple_API_ASPNET.Models;

namespace exemple_API_ASPNET.Data
{
    public class exemple_API_ASPNETContext : DbContext
    {
        public exemple_API_ASPNETContext (DbContextOptions<exemple_API_ASPNETContext> options)
            : base(options)
        {
        }

        public DbSet<exemple_API_ASPNET.Models.Cosplay> Cosplay { get; set; } = default!;
    }
}
