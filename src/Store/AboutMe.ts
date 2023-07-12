export interface About {
  name: string;
  proffesion: string;
  experience: number;
  description: string;
  github: string;
  hobbies: string;
  dateOfGraduation: Date;
  imageUrl: string;
  location: string;
  latestEmployer: {
    name: string;
    location: string;
  };
}

export const AboutMe: About = {
  name: 'David kamau',
  proffesion: 'Software Engineering',
  experience: 6,
  description: `Am a software engineer with vast experience 
    in various fields of software enginnering both backend and frontend`,
  github: 'github.com/kamaathedj',
  hobbies: 'playing soccer and hiking',
  dateOfGraduation: new Date('16/12/2018'),
  imageUrl: '/pic.jpg',
  location: 'Nairobi, Kenya',
  latestEmployer: {
    name: 'Gebeya Talent',
    location: 'remote',
  },
};
