using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Products.Models;

namespace Products.DAL
{
    public class Products
    {
        public Products()
        {
            var context = new ProductsDAL();
            var item = new Product
            {
                Id = 1,
                Image = null,
                LastUpdate = new DateTime(2017, 5, 5),
                Name = "ggg",
                Price = 10
            };
            context.Products.Add(item);
            var item2 = new Product
            {
                Id = 2,
                Image = null,
                LastUpdate = new DateTime(2017, 5, 7),
                Name = "rrr",
                Price = 100
            };
            context.Products.Add(item2);
            context.SaveChanges();
        }
        public IEnumerable<Product> GetAll()
        {
            var context = new ProductsDAL();
            return context.Products.ToList();
        }

        public Product Add(Product product)
        {
            var context = new ProductsDAL();
            context.Products.Add(product);
            context.SaveChanges();
            return context.Products.FirstOrDefault(x => x.Name == product.Name);
        }
    }
}