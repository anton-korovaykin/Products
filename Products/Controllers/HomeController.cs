using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Products.DAL;
using Products.Models;

namespace Products.Controllers
{
    public class HomeController : Controller
    {
        public string Index()
        {
            var products = new DAL.Products();
            return products.GetAll().FirstOrDefault().Name;

            //return View();
        }
    }
}