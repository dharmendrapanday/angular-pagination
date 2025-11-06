import { Component } from '@angular/core';
import { MatGridList, MatGridListModule, MatGridTile } from '@angular/material/grid-list';
import { Slider } from '../../shared/components/slider/slider';
import { MatCard, MatCardModule } from '@angular/material/card';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatButton, MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [MatButtonModule, MatGridListModule, Slider, MatCardModule, MatIconModule, MatExpansionModule, CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {
 carouselImages = [
    { src: 'https://picsum.photos/id/1018/1700/1000', alt: 'Forest with a lake', title: 'Serene Forest Lake' },
    { src: 'https://picsum.photos/id/1015/1700/1000', alt: 'Beach sunset', title: 'Golden Hour at the Beach' },
    { src: 'https://picsum.photos/id/1016/1700/1000', alt: 'Mountain range', title: 'Majestic Mountains' },
    { src: 'https://picsum.photos/id/1020/1700/1000', alt: 'Desert road', title: 'Endless Desert Road' },
    { src: 'https://picsum.photos/id/1025/1700/1000', alt: 'Pug dog', title: 'Adorable Pug' },
  ];
   features = [
    {
      icon: 'people',
      title: 'Student Management',
      subtitle: 'Centralized Student Records',
      description:
        'Manage complete student profiles, admissions, attendance, and performance history in one secure dashboard.'
    },
    {
      icon: 'checklist',
      title: 'Attendance Tracking',
      subtitle: 'Automated Daily Tracking',
      description:
        'Track attendance in real-time, generate instant reports, and send automated alerts to parents.'
    },
    {
      icon: 'school',
      title: 'Exams & Gradebook',
      subtitle: 'Report Generation',
      description:
        'Schedule exams, record marks, and generate dynamic report cards with analytical insights for each student.'
    }
  ];
  faqs= [
    {
      "question": "How secure is our student and staff data on your platform?",
      "answer": "Data security is our top priority. We use end-to-end SSL encryption, secure cloud servers with regular backups, and role-based access control to ensure that only authorized users can access sensitive information. Our platform is compliant with modern data protection standards."
    },
    {
      "question": "How difficult is the setup process and can we import existing data?",
      "answer": "Our dedicated onboarding team makes the setup process seamless. We provide full support for importing your existing student, staff, and academic records from formats like Excel, CSV, or other software. Most schools are fully operational within a week."
    },
    {
      "question": "What features are available for parent-teacher communication?",
      "answer": "We offer a dedicated parent portal and a mobile app for both Android and iOS. These tools provide real-time notifications for attendance and grades, a secure internal messaging system, access to school circulars and event calendars, and the ability to view report cards."
    },
    {
      "question": "What kind of training and support do you provide after purchase?",
      "answer": "We provide comprehensive online training videos and live webinars for all your staff to ensure everyone is comfortable with the system. Our dedicated customer support team is available 24/7 via email, phone, and live chat to assist with any queries."
    }
  ]
}
