using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using exemple_API_ASPNET.Data;
using exemple_API_ASPNET.Models;

namespace exemple_API_ASPNET.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CosplaysController : ControllerBase
    {
        private readonly exemple_API_ASPNETContext _context;

        public CosplaysController(exemple_API_ASPNETContext context)
        {
            _context = context;
        }

        // GET: api/Cosplays
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Cosplay>>> GetCosplay()
        {
          if (_context.Cosplay == null)
          {
              return NotFound();
          }
            return await _context.Cosplay.ToListAsync();
        }

        // GET: api/Cosplays/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Cosplay>> GetCosplay(int id)
        {
          if (_context.Cosplay == null)
          {
              return NotFound();
          }
            var cosplay = await _context.Cosplay.FindAsync(id);

            if (cosplay == null)
            {
                return NotFound();
            }

            return cosplay;
        }

        // PUT: api/Cosplays/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutCosplay(int id, Cosplay cosplay)
        {
            if (id != cosplay.CosplayID)
            {
                return BadRequest();
            }

            _context.Entry(cosplay).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!CosplayExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Cosplays
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Cosplay>> PostCosplay(Cosplay cosplay)
        {
          if (_context.Cosplay == null)
          {
              return Problem("Entity set 'exemple_API_ASPNETContext.Cosplay'  is null.");
          }
            _context.Cosplay.Add(cosplay);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetCosplay", new { id = cosplay.CosplayID }, cosplay);
        }

        // DELETE: api/Cosplays/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteCosplay(int id)
        {
            if (_context.Cosplay == null)
            {
                return NotFound();
            }
            var cosplay = await _context.Cosplay.FindAsync(id);
            if (cosplay == null)
            {
                return NotFound();
            }

            _context.Cosplay.Remove(cosplay);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool CosplayExists(int id)
        {
            return (_context.Cosplay?.Any(e => e.CosplayID == id)).GetValueOrDefault();
        }
    }
}
