using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;
using Products.Models;

namespace Products.DAL
{
    public class ProductsDAL : DbContext
    {
        public DbSet<Product> Products { get; set; }
    }

    public class ProductsInitializer : System.Data.Entity.DropCreateDatabaseAlways<ProductsDAL>
    {
        protected override void Seed(ProductsDAL context)
        {
            context.Products.AddRange(new List<Product>
            {
                new Product {Id = 1, Name = "Bread", Price = 10, LastUpdate = DateTime.Now, Image = ""},
                new Product {Id = 2, Name = "Meat", Price = 100, LastUpdate = DateTime.Now, Image = ""},
                new Product {Id = 3, Name = "Milk", Price = 70, LastUpdate = DateTime.Now, Image = ""},
                new Product {Id = 4, Name = "Egg", Price = 3, LastUpdate = DateTime.Now, Image = ""},
                new Product {Id = 5, Name = "Cheese", Price = 80, LastUpdate = DateTime.Now, Image = ""},
                new Product {Id = 6, Name = "Cookie", Price = 40, LastUpdate = DateTime.Now, Image = ""},
                new Product {Id = 7, Name = "Pepper", Price = 1, LastUpdate = DateTime.Now, Image = ""},
                new Product {Id = 8, Name = "Icecream", Price = 8, LastUpdate = DateTime.Now, Image = ""},
            });
            context.SaveChanges();
        }
    }
}