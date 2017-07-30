 var bio = {
 	name : "Tim Gemkow",
 	role : "IT Consultant / Software Architect",
 	contacts : {
 		mobile: "On request",
 		email: "On request", 
 		github: "tgem",
          // twitter: string (optional)
          location: "Berlin, Germany"
      },
      welcomeMessage: "Let us build great software together.", 
      skills: ["Software Architecture","Requirements Engineering","Java","HTML5/CSS3/JS"],
      biopic: "",
      display: function() {
      	$('#header').prepend(HTMLheaderRole.replace("%data%",this.role));
      	$('#header').prepend(HTMLheaderName.replace("%data%",this.name));

      	$('#topContacts').append(HTMLmobile.replace("%data%",this.contacts.mobile));
      	$('#topContacts').append(HTMLemail.replace("%data%",this.contacts.email));
      	$('#topContacts').append(HTMLgithub.replace("%data%",this.contacts.github));
      	$('#topContacts').append(HTMLlocation.replace("%data%",this.contacts.location));

      	$('#footerContacts').append(HTMLmobile.replace("%data%",this.contacts.mobile));
      	$('#footerContacts').append(HTMLemail.replace("%data%",this.contacts.email));
      	$('#footerContacts').append(HTMLgithub.replace("%data%",this.contacts.github));
      	$('#footerContacts').append(HTMLlocation.replace("%data%",this.contacts.location));

      	$('#header').append(HTMLbioPic.replace("%data%","images/profile.jpg"));
      	$('#header').append(HTMLwelcomeMsg.replace("%data%",this.welcomeMessage));
      	$('#header').append(HTMLskillsStart);
      	for(var i=0;i<this.skills.length;i++) {
      		$('#skills').append(HTMLskills.replace("%data%",this.skills[i]));
      	}

      	/* TODO footer */

      }
  };

  var education = {
  	schools: [
  	{
  		name: "Free University of Berlin",
  		location: "Berlin, Germany",
  		degree: "Doctorate (Dr. rer. pol.)",
  		majors: ["political science"],
  		dates: "06/2008 - 02/2013",
  		url: "http://www.fu-berlin.de"
  	},
  	{
  		name: "University of Hagen",
  		location: "Hagen, Germany",
  		degree: "German Diploma (Diplom-Volkswirt, combined B.S./M.S. equivalent)",
  		majors: ["monetary economics","finance"],
  		dates: "10/2005 - 03/2011",
  		url: "http://www.fernuni-hagen.de"
  	}
  	],
  	onlineCourses: [
  	{
  		title: "Front-End Developer Nanodegree",
  		school: "Udacity",
  		dates: "In progress",
  		url: "http://www.udacity.com"
  	}
  	],
  	display: function() {
  		for(var i=0;i<this.schools.length;i++) {
  			var school = this.schools[i];

        $('#education').append(HTMLschoolStart);

        $('.education-entry:last').append(HTMLschoolName.replace("#",school.url).replace("%data%",school.name));
        $('.education-entry:last').append(HTMLschoolDegree.replace("%data%",school.degree));
        $('.education-entry:last').append(HTMLschoolDates.replace("%data%",school.dates));
        $('.education-entry:last').append(HTMLschoolLocation.replace("%data%",school.location));

  			var majors = "";
  			for(var j=0;j<school.majors.length;j++) {
  				majors = majors + school.majors[j];
  				if(j<school.majors.length-1) {
  					majors = majors + ", ";
  				}
  			}

        $('.education-entry:last').append(HTMLschoolMajor.replace("%data%",majors));
  		}

  		$('#education').append(HTMLonlineClasses);

  		for(var i=0;i<this.onlineCourses.length;i++) {
  			var course = this.onlineCourses[i];

        $('#education').append(HTMLschoolStart);

  			$('.education-entry:last').append(HTMLonlineTitle.replace("#",course.url).replace("%data%",course.title));
  			$('.education-entry:last').append(HTMLonlineSchool.replace("%data%",course.school));
  			$('.education-entry:last').append(HTMLonlineDates.replace("%data%",course.dates));
  			$('.education-entry:last').append(HTMLonlineURL.replace("#",course.url).replace("%data%",course.url));

		}
	}
};

var work = {
	jobs: [
	{
		employer: "]init[ AG", 
		title: "IT Consultant", 
		location: "Berlin, Germany", 
		dates: "since 01/2016",
		description: "Lead requirements engineer and project manager for IT projects with public sector clients.",
		url: "http://www.init.de" 
	},
	{
		employer: "Association of German Chambers of Commerce and Industry", 
		title: "Policy Officer", 
		location: "Berlin, Germany", 
		dates: "10/2013 - 12/2015",
		description: "Monitoring and evaluating financial sector legislation.",
		url: "http://www.dihk.de" 
	}
	],
	display: function() {
		for(var i=0;i<this.jobs.length;i++) {
			var job = this.jobs[i];

			var workEmployer = HTMLworkEmployer.replace("#",job.url).replace("%data%",job.employer);
			var workTitle = HTMLworkTitle.replace("%data%",job.title);
			var workDates = HTMLworkDates.replace("%data%",job.dates);
			var workLocation = HTMLworkLocation.replace("%data%",job.location);
			var workDescription = HTMLworkDescription.replace("%data%",job.description);

			var workHTML = ">" + workEmployer + workTitle + workDates + workLocation + workDescription + "<";
			var workStart = HTMLworkStart.replace("><",workHTML);

			$('#workExperience').append(workStart);

		}

	}
};

var projects = {
	projects: [
	{
		title: "Interactive resume", 
		dates: "06/2017",
		description: "A site displaying key biographical information to potential employers",
		images: ["images/FrenchCathedral_source_2.jpg"],
    imgAttributions: ["© A.Savin, Wikimedia Commons"]
	},
	{
		title: "Second JS project", 
		dates: "in the future",
		description: "An even more impressive presentation of my JavaScript skills",
		images: ["images/oberbaum.jpg"],
    imgAttributions: ['By <a href="http://flickr.com/photos/sarah_jane/">Sarah Jane on Flickr</a>']
	}
	],
	display: function() {

		for(var i=0;i<this.projects.length;i++) {
			var project = this.projects[i];

			var projectTitle = HTMLprojectTitle.replace("%data%",project.title);
			var projectDates = HTMLprojectDates.replace("%data%",project.dates);
			var projectDescription = HTMLprojectDescription.replace("%data%",project.description);

			var projectImages = '<div class="projectImages">';
			for(var j=0;j<project.images.length;j++) {
				projectImages = projectImages+HTMLprojectImage.replace("%data%",project.images[j]).replace("%attribution%",project.imgAttributions[j]);
			}

			projectImages = projectImages +"</div>";

			var projectHTML = ">" + projectTitle + projectDates + projectDescription + projectImages + "<";
			var projectStart = HTMLprojectStart.replace("><",projectHTML);

			$('#projects').append(projectStart);

		}


	}

};

function presentMap() {
  $('#mapDiv').append(googleMap);  
}

/* calls to prepare resume */

bio.display();
education.display();
work.display();
projects.display();
presentMap();

/* Code moved from index.html to enforce separation of concerns */

function hideUnusedElements() {
    if(document.getElementsByClassName('flex-item').length === 0) {
      document.getElementById('topContacts').style.display = 'none';
    }
    if(document.getElementsByTagName('h1').length === 0) {
      document.getElementById('header').style.display = 'none';
    }
    if(document.getElementsByClassName('work-entry').length === 0) {
      document.getElementById('workExperience').style.display = 'none';
    }
    if(document.getElementsByClassName('project-entry').length === 0) {
      document.getElementById('projects').style.display = 'none';
    }
    if(document.getElementsByClassName('education-entry').length === 0) {
      document.getElementById('education').style.display = 'none';
    }
    if(document.getElementsByClassName('flex-item').length === 0) {
      document.getElementById('lets-connect').style.display = 'none';
    }
    if(document.getElementById('map') === null) {
      document.getElementById('mapDiv').style.display = 'none';
    }

}

hideUnusedElements();