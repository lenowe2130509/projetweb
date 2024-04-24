using ProjectCosplay.Controllers;
using Microsoft.EntityFrameworkCore;

namespace ProjectCosplay.Data
{
    public static class SeedData
    {
        public static void Initialize(IServiceProvider serviceProvider)
        {
            using var context = new ProjectCosplayContext(
                        serviceProvider.GetRequiredService<DbContextOptions
                        <ProjectCosplayContext>>());
                SeedDB(context);
        }
        public static void SeedDB(ProjectCosplayContext context)
        {
            if (context.Cosplay.Any())
            {
                    context.Cosplay.AddRange(
                    new Models.Cosplay { Nom = "Loup", ProprietaireId = "alice"},
                    new Models.Cosplay { Nom = "Sorcier", ProprietaireId = "alice" },
                    new Models.Cosplay { Nom = "Monkey D. Luffy" , ProprietaireId = "alice" },
                    new Models.Cosplay { Nom = "Xavier", ProprietaireId = "alice" },
                    new Models.Cosplay { Nom = "Naruto :3", ProprietaireId = "alice" });
                    context.SaveChanges();
            }
            return;
        }
    }
}
