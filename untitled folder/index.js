const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const app = express();
const port = 9090;

app.engine('hbs', exphbs({
    extname: 'hbs',
    defaultView: 'main',
    layoutsDir: path.join(__dirname, 'views/layouts'),
    partialsDir: path.join(__dirname, 'views/partials')
}));

app.set('view engine', 'hbs');

app.get('/', function(req,res){
    res.render('home', {
        title: 'Welcome',
    })
});
app.get('/profile', function(req,res){
    res.render('profile', {
        title: 'About Me',
        profpic: 'assets/profpic.jpg',
        name: 'Danielle Kirsten Sison',
        idnum: '118',
        degree: 'BS CS-ST',
        shortbio: `I am literally obsessed with cats and Gone With The Wind.
                  Allergic to sexist men in CS 🤧🚀.`,  
    })
});
app.get('/academics', function(req,res){
    res.render('acads', {
        title: 'Courses Taken',
        course_records: [
            {
                yearlvl:`Freshman`,
                courses: [
                    { 
                        coursecode: `BASTAT`,
                        faculty: `Sir Karl Man Collado`
                    },
                    {
                        coursecode: `BASMATH`,
                        faculty: `Sir Melvin Vidar`
                    },
                    {
                        coursecode: `CCDISTRUC`,
                        faculty: `Ms Pau Rivera`
                    },
                    {
                        coursecode: `CCDSALG`,
                        faculty: `Ms Tessie Limoanco`
                    },
                    {
                        coursecode: `CCPROG1`,
                        faculty: `Ms Tessie Limoanco`
                    },
                    {
                        coursecode: `CCPROG2`,
                        faculty: `Sir Arturo Caronongan`
                    },
                    {
                        coursecode: `CCPROG3`,
                        faculty: `Ms Nathalie Lim-Cheng`
                    }
                ],
            },
            {
                yearlvl:`Sophomore`,
                courses: [
                    {
                        coursecode: `CCAPDEV`,
                        faculty: `Ms Unisse Chua`
                    },
                    {
                        coursecode: `CCINFOM`,
                        faculty: `Sir Oliver Malabanan`
                    },
                    {
                        coursecode: `CSADPRG`,
                        faculty: `Ms Charibeth Cheng`
                    },
                    {
                        coursecode: `CSALGCM`,
                        faculty: `Sir Neil Del Gallego`
                    },
                    {
                        coursecode: `CSINTSYS`,
                        faculty: `Ms Pauline Rivera`
                    },
                    {
                        coursecode: `STALGCM`,
                        faculty: `Sir Arvin Reyes`
                    },
                    {
                        coursecode: `STMATH`,
                        faculty: `Sir Rigor Ponsones`
                    }
                ]
            }
        ],
    })
});
app.get('/activities', function(req,res){
    res.render('activities', {
        title: 'Extra Curricular Activities',
        org_records: [
            {
                orgname: `Developh`,
                position: `Vice President for Community`
            },
            {
                orgname: `La Salle Computer Society`,
                position: `Former Junior Officer`
            },
            {
                orgname: `Developer Student Club Taft`,
                position: `Founder & President`
            },
            {
                orgname: `DLSU COMET`,
                position: `Perseid Cohort`
            },
            {
                orgname: `Microsoft Student Community`,
                position: `Member`
            },
            {
                orgname: `User Experience Society DLSU`,
                position: `Member`
            },
            {
                orgname: `CATCH2T22`,
                position: `Externals Associate`
            },
            {
                orgname: `Computer Studies Government `,
                position: `Former Externals Associate`
            },
            {
                orgname: `Women Who Code`,
                position: `Member & Volunteer`
            }
        ]
    })
});
app.use(express.static('public'));
app.listen(port, function() {
    console.log(`App listening at port ${port}`)
});
  