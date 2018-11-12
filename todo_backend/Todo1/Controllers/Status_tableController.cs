using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
using Todo1.Models;

namespace Todo1.Controllers
{
    public class Status_tableController : ApiController
    {
        private to_doEntities db = new to_doEntities();

        // GET: api/Status_table
        public IQueryable<Status_table> GetStatus_table()
        {
            return db.Status_table;
        }

        // GET: api/Status_table/5
        [ResponseType(typeof(Status_table))]
        public IHttpActionResult GetStatus_table(int id)
        {
            Status_table status_table = db.Status_table.Find(id);
            if (status_table == null)
            {
                return NotFound();
            }

            return Ok(status_table);
        }

        // PUT: api/Status_table/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutStatus_table(int id, Status_table status_table)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != status_table.ID)
            {
                return BadRequest();
            }

            db.Entry(status_table).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!Status_tableExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return StatusCode(HttpStatusCode.NoContent);
        }

        // POST: api/Status_table
        [ResponseType(typeof(Status_table))]
        public IHttpActionResult PostStatus_table(Status_table status_table)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.Status_table.Add(status_table);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = status_table.ID }, status_table);
        }

        // DELETE: api/Status_table/5
        [ResponseType(typeof(Status_table))]
        public IHttpActionResult DeleteStatus_table(int id)
        {
            Status_table status_table = db.Status_table.Find(id);
            if (status_table == null)
            {
                return NotFound();
            }

            db.Status_table.Remove(status_table);
            db.SaveChanges();

            return Ok(status_table);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool Status_tableExists(int id)
        {
            return db.Status_table.Count(e => e.ID == id) > 0;
        }
    }
}