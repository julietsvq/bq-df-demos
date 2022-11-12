function ageBucket(age) {
const age_clean = `cast(${age} as int64)`;
return `case
          when ${age_clean} between 0 and 18 then "Under 18"
          when ${age_clean} between 19 and 35 then "19 to 35"
          when ${age_clean} between 36 and 50 then "36 to 50"
          else "50+"
        end`;
}
 
module.exports = {
ageBucket
};
