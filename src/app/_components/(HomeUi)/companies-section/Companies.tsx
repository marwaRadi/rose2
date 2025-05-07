import companyOne from '@/../public/gifts-background/companies/company-one.svg'
import companyTwo from '@/../public/gifts-background/companies/company-two.svg'
import companyThree from '@/../public/gifts-background/companies/company-three.svg'
import companyFour from '@/../public/gifts-background/companies/company-four.svg'
import companyFive from '@/../public/gifts-background/companies/company-five.svg'
import companySix from '@/../public/gifts-background/companies/company-six.svg'
import Image from 'next/image'
import PrimaryBtn from '@/components/common/buttons/PrimaryBtn'
import { ArrowRight } from 'lucide-react'
const companies = [companyOne, companyTwo, companyThree, companyFour, companyFive, companySix];

function Companies() {
  return (
    <div className="bg-primary-light-90 fixed-size space-y-8 py-10">
      <h2 className="text-center ">
        <span className="border-b-2 border-primary-dark">Trusted by </span> over
        <span className="text-primary-dark mx-2 ">4.5k+</span> companies
      </h2>
      <div className=" flex items-center justify-between  ">
        {companies.map((company, index) => (
          <div key={index} className="">
            <Image src={company} alt="company" />
          </div>
        ))}
      </div>
      <div className='flex justify-center'>
        <PrimaryBtn>
          View All Brands <ArrowRight className="inline-block" />
        </PrimaryBtn>
      </div>
    </div>
  );
}

export default Companies
