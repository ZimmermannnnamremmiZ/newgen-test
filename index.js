/* Как я понял, при фильтре [100, 350] должны выводится только курсы,
   у которых минимальная цена больше или равна 100, а максимальная меньше или равна 350.
   В этом не был уверен:
     1). вывод курса с диапазоном цен [500, null] при фильтре [200, null] (решил что да, а курс с [null, 400] - нет);
     2). если у курса нет цены, т.е. [null, null], то его не выводим
     3) если выбран фильтр [100, 350], то должен ли выводиться курс с [200, null] (решил что нет, т.к. ограничение в фильтре 350)
*/

// оставил let, так как он был в примере
let courses = [
  { name: "Courses in England", prices: [0, 100] },
  { name: "Courses in Germany", prices: [500, null] },
  { name: "Courses in Italy", prices: [100, 200] },
  { name: "Courses in Russia", prices: [null, 400] },
  { name: "Courses in China", prices: [50, 250] },
  { name: "Courses in USA", prices: [200, null] },
  { name: "Courses in Kazakhstan", prices: [56, 324] },
  { name: "Courses in France", prices: [null, null] },
];

let requiredRange1 = [null, 200];
let requiredRange2 = [100, 350];
let requiredRange3 = [200, null];
let requiredRange4 = [null, null]; // добавил на всякий случай

function filterPrice (courses, ranges) {
  const minPrice = ranges[0]   // минимальное значение цены в фильтре
  const maxPrice = ranges[1]   // максимальное значение цены в фильтре

  return courses.filter(course => {
      // если у курса не указан диапазон цен, не выводим его
      if (course.prices[0] === null && course.prices[1] === null) return;

      // если нет фильтров, выводим все курсы
      if (minPrice === null && maxPrice === null) return course;

      return minPrice === null    // если минимальная цена в фильтре не указана
             ? maxPrice >= course.prices[1] && course.prices[1] !== null
             : maxPrice === null  // если максимальная цена в фильтре не указана
             ? minPrice <= course.prices[0]
             : minPrice <= course.prices[0] && maxPrice >= course.prices[1] && course.prices[1] !== null
  })
}

// console.log(filterPrice(courses, requiredRange1))
// console.log(filterPrice(courses, requiredRange2))
// console.log(filterPrice(courses, requiredRange3))
// console.log(filterPrice(courses, requiredRange4))