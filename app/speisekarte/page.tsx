import OnlineDialog from "@/components/sections/OnlineDialog";
import OpeningImage from "@/components/sections/OpeningImage";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface Meal {
  name: string;
  ingredients: string;
  price: number;
}

interface Category {
  name: string;
  meals: Meal[];
}

const vorspeisen: Meal[] = [
  {
    name: "Antipasti",
    ingredients: "mit gegrilltem Gemüse",
    price: 14.0,
  },
  {
    name: "Bruschetta",
    ingredients: "mit Tomaten, Basilikum und Knoblauch",
    price: 8.0,
  },
  {
    name: "Carpaccio",
    ingredients: "mit Rucola und Parmesan",
    price: 12.0,
  },
  {
    name: "Insalata Caprese",
    ingredients: "mit Tomaten, Mozzarella und Basilikum",
    price: 10.0,
  },
  {
    name: "Insalata Mista",
    ingredients: "mit gemischtem Salat",
    price: 8.0,
  },
];
const pasta: Meal[] = [
  {
    name: "Spaghetti Aglio e Olio",
    ingredients: "mit Knoblauch und Olivenöl",
    price: 10.0,
  },
  {
    name: "Spaghetti Bolognese",
    ingredients: "mit Hackfleischsauce",
    price: 12.0,
  },
  {
    name: "Spaghetti Carbonara",
    ingredients: "mit Speck und Ei",
    price: 12.0,
  },
  {
    name: "Spaghetti Frutti di Mare",
    ingredients: "mit Meeresfrüchten",
    price: 14.0,
  },
  {
    name: "Spaghetti Napoli",
    ingredients: "mit Tomatensauce",
    price: 10.0,
  },
];
const pizza: Meal[] = [
  {
    name: "Pizza Calzone",
    ingredients: "mit Tomatensauce, Mozzarella, Schinken und Champignons",
    price: 12.0,
  },
  {
    name: "Pizza Capricciosa",
    ingredients: "mit Tomatensauce, Mozzarella, Schinken und Champignons",
    price: 12.0,
  },
  {
    name: "Pizza Margherita",
    ingredients: "mit Tomatensauce und Mozzarella",
    price: 10.0,
  },
  {
    name: "Pizza Quattro Formaggi",
    ingredients: "mit Tomatensauce und vier verschiedenen Käsesorten",
    price: 12.0,
  },
  {
    name: "Pizza Salami",
    ingredients: "mit Tomatensauce, Mozzarella und Salami",
    price: 12.0,
  },
];
const dessert: Meal[] = [
  {
    name: "Tiramisu",
    ingredients: "mit Mascarpone und Amaretto",
    price: 8.0,
  },
  {
    name: "Panna Cotta",
    ingredients: "mit Vanille und Erdbeersauce",
    price: 8.0,
  },
  {
    name: "Gelato",
    ingredients: "mit verschiedenen Sorten",
    price: 6.0,
  },
];

const categories: Category[] = [
  {
    name: "Vorspeisen",
    meals: vorspeisen,
  },
  {
    name: "Pasta",
    meals: pasta,
  },
  {
    name: "Pizza",
    meals: pizza,
  },
  {
    name: "Dessert",
    meals: dessert,
  },
];

export default function Speisekarte() {
  return (
    <main className="w-full flex items-center flex-col py-8 bg-zinc-200">
      <h1 className="text-5xl md:text-6xl my-4">SPEISEKARTE</h1>
      <section id="Speisekarte">
        <Tabs defaultValue={categories[0].name} className="w-[400px]">
          <TabsList className="grid w-full grid-cols-4">
            {categories.map((category: Category) => (
              <TabsTrigger key={category.name} value={category.name}>
                {category.name}
              </TabsTrigger>
            ))}
          </TabsList>
          {categories.map((category: Category) => (
            <TabsContent key={category.name} value={category.name}>
              <Card>
                <CardHeader>
                  <CardTitle className="font-normal text-center">
                    {category.name}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="text-zinc-500">Gericht</TableHead>
                        <TableHead className="text-zinc-500">Preis</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {category.meals.map((meal) => (
                        <TableRow key={meal.name}>
                          <TableCell className="font-medium text-black flex flex-col ">
                            <p>{meal.name}</p>
                            <p className="text-sm text-gray-500">
                              {meal.ingredients}
                            </p>
                          </TableCell>
                          <TableCell className="text-black">
                            {meal.price} €
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </TabsContent>
          ))}
        </Tabs>
      </section>
    </main>
  );
}
