import React from 'react';
import '../styles/Services.css';
import Arrow from '../assets/icon/Arrow.svg'
import Money from '../assets/icon/money.svg'
import Heart from '../assets/icon/Heart Donation.svg'

const services = [
  {
    title: 'تبادل المنتجات',
    description: 'هنا يمكنك مبادلة ما لديك بما تحتاجه مما يتيح لك تحقيق أقصى استفادة بدون تكلفة مالية.',
    button: 'بدل الآن',
    icon: `${Arrow}`, // استبدل بالمسار الصحيح للأيقونة
    type: '/exchange',
  },
  {
    title: 'بيع منتجات',
    description: 'استفد مما لديك عبر بيعه لمن يحتاج إليه، مع المساهمة في تلبية احتياجات الآخرين.',
    button: 'بيع الآن',
    icon: `${Money}`, // استبدل بالمسار الصحيح للأيقونة
    type: '/sale',
  },
  {
    title: 'تبرع',
    description: 'قدّم ما لا تحتاجه للآخرين وساهم في دعم مجتمعك وإحداث فرق إيجابي في حياة الناس.',
    button: 'تبرع الآن',
    icon: `${Heart}`, // استبدل بالمسار الصحيح للأيقونة
    type: '/donate',
  },
];

const Services = () => {
  return (
    <section className="services-section py-5">
      {/* <img src='' /> */}
      <div className="container text-center">
        <h2 className="section-title mb-4">خدماتنا</h2>
        <p className="section-description mb-5">
          هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ عن التركيز على الشكل الخارجي للنص.
        </p>
        <div className="row">
          {services.map((service, index) => (
            <div className="col-md-4 mb-4" key={index}>
              <div className="card service-card p-4 shadow-sm">
                <div className="service-icon mb-3">
                  <img src={service.icon} alt={`${service.title} icon`} />
                </div>
                <h5 className="service-title mb-3">{service.title}</h5>
                <p className="service-description mb-4">{service.description}</p>
                <a href={service.type} className="btn btn-success">{service.button}</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
