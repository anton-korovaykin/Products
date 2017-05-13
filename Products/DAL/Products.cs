using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography.X509Certificates;
using System.Web;
using Products.Models;

namespace Products.DAL
{
    public class Products
    {
        public IEnumerable<Product> GetAll()
        {
            var context = new ProductsDAL();
            return context.Products.ToList();
        }

        public Product GetById(int id)
        {
            var context = new ProductsDAL();
            return context.Products.FirstOrDefault(x => x.Id == id);
        }

        public Product Update(Product product)
        {
            var context = new ProductsDAL();
            Product savedProduct = context.Products.FirstOrDefault(x => x.Id == product.Id);
            if (savedProduct == null) throw new Exception("Product was not found");

            savedProduct.Name = product.Name;
            savedProduct.Image = product.Image;
            savedProduct.Price = product.Price;
            savedProduct.LastUpdate = DateTime.Now;

            context.SaveChanges();
            return context.Products.FirstOrDefault(x => x.Id == product.Id);
        }

        public Product Add(Product product)
        {
            product.LastUpdate = DateTime.Now;

            var context = new ProductsDAL();
            context.Products.Add(product);
            context.SaveChanges();
            return context.Products.FirstOrDefault(x => x.Name == product.Name);
        }

        public void Delete(int id)
        {
            var context = new ProductsDAL();
            var product = context.Products.FirstOrDefault(x => x.Id == id);
            if (product == null) throw new Exception("Product was not found");
            context.Products.Remove(product);
        }
    }
}