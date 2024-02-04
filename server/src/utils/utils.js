const queryBuilder = (query) => {
    let count = 0;
    let sql = "SELECT * FROM Course"
    if(Object.keys(query).length > 0) sql += " WHERE "
    if(query.name){
        sql += `course_name="${query.name}"`
        count++;
    } 
    if(query.level){
        if(count){
           sql += " AND" 
        }
        sql += ` level_id=(SELECT level_id FROM EducationLevel WHERE level_name="${query.level}")`
        count++;
    } 
    if(query.country){
        if(count){
            sql += " AND" 
        }
        sql += ` university_id IN (SELECT university_id FROM University WHERE country_id=(SELECT country_id FROM Country WHERE country_name="${query.country}"))`
    } 
    sql += ";"
    console.log(sql)

    return sql;

}

module.exports = queryBuilder