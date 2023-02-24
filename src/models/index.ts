import { Category } from "./Category";

import { Course } from "./Course";
import { Episode } from "./Episode";
import { Favorite } from "./Favorite";
import { Like } from "./Like";
import { User } from "./User";

Category.hasMany(Course, { as: 'courses' })

Course.belongsTo(Category)
// Course.hasMany(Episode)
Course.belongsToMany(User, { through: Favorite })
Course.belongsToMany(User, { through: Like })
Course.hasMany(Episode, { as: 'episodes'})
Course.hasMany(Favorite, { as: 'favoritesUsers', foreignKey: 'course_id' })

Episode.belongsTo(Course)

Favorite.belongsTo(Course)
Favorite.belongsTo(User)

User.belongsToMany(Course, { through: Favorite })
User.belongsToMany(Course, { through: Like })
User.hasMany(Favorite, { as: 'favoritesCourses', foreignKey: 'user_id' })

//como a associação N:N com Like no meio é bem simples, não foi preciso grudar igual fez com Favorite
//Usou somente o ... through ...

export { 
  Category,
  Course,
  Episode,
  Favorite,
  Like,
  User  
}