using exemple_API_ASPNET.Controllers;
using Microsoft.EntityFrameworkCore;

namespace exemple_API_ASPNET.Data
{
    public static class SeedData
    {
        public static void Initialize(IServiceProvider serviceProvider)
        {
            using var context = new exemple_API_ASPNETContext(
                        serviceProvider.GetRequiredService<DbContextOptions
                        <exemple_API_ASPNETContext>>());
                SeedDB(context);
        }
        public static void SeedDB(exemple_API_ASPNETContext context)
        {
            if (context.Cosplay.Any())
                return;
            context.Cosplay.AddRange(
                new Models.Cosplay { Nom = "Loup" },
                new Models.Cosplay { Nom = "Sorcier" },
                new Models.Cosplay { Nom = "Monkey D. Luffy" },
                new Models.Cosplay { Nom = "Xavier" },
                new Models.Cosplay { Nom = "Naruto :3" });
            context.SaveChanges();
        }
    }
}
