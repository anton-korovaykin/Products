using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;
using Products.Models;

namespace Products.DAL
{
    public class ProductsDAL:DbContext
    {
        public DbSet<Product> Products { get; set; }
    }
}