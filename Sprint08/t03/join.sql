SELECT * FROM  heroes LEFT JOIN teams on teams.hero_id = heroes.Id;
SELECT * FROM  heroes LEFT JOIN powers on powers.hero_id = heroes.Id UNION SELECT * FROM  heroes RIGHT JOIN powers on powers.hero_id = heroes.Id;
SELECT * FROM  heroes JOIN teams on heroes.Id = teams.hero_id JOIN powers on heroes.Id = powers.hero_id;