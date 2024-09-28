import { useState } from 'react';
import ProfileCard from '../../ProfileCard'
import CertificationsBody from './CertificationsBody'
import { showToast } from '@/components/Sonner';

const Certifications = ({viewOnly}) => {
    const initialData= [
        {
            certName: "GRAPHIC DESIGN MASTERCLASS – LEARN GREAT DESIGN BY LINDSAY MARSH",
            provider: "Udemy",
            issueDate: {
                year: 2021,
                month: "January",
            },
            expirationDate: {
                year: 2022,
                month: "March"
            },
            certId: "UIDDD567903",
            certUrl: "https://udemy/certificate/UIDDD567903",
        },
        {
            certName: "GRAPHIC DESIGN MASTERCLASS – LEARN GREAT DESIGN BY LINDSAY MARSH",
            provider: "Udemy",
            issueDate: {
                year: 2021,
                month: "January",
            },
            expirationDate: {
                year: 2022,
                month: "March"
            },
            certId: "UIDDD567903",
            certUrl: "https://udemy/certificate/UIDDD567903",
        },
        {
            certName: "GRAPHIC DESIGN MASTERCLASS – LEARN GREAT DESIGN BY LINDSAY MARSH",
            provider: "Udemy",
            issueDate: {
                year: 2021,
                month: "January",
            },
            expirationDate: {
                year: 2022,
                month: "March"
            },
            certId: "UIDDD567903",
            certUrl: "https://udemy/certificate/UIDDD567903",
        },
    ];
    const [certificationData, setCertificationData] = useState(initialData);
    const [certName, setCertName] = useState("");
    const [provider, setProvider] = useState("");
    const [issueDate, setIssueDate] =useState({month: "", year: ""});
    const [expirationDate, setExpirationDate] =useState({month: "", year: ""});
    const [certId, setCertId] = useState("");
    const [certUrl, setCertUrl] = useState("");
    const handleSave = (newCertName, newProvider, newIssueDate, newExpirationDate, newCertId, newCertUrl,) => {
        if (
          !newCertName || 
          !newProvider || 
          !newExpirationDate || 
          !newIssueDate || !newIssueDate.month || !newIssueDate.year || 
          !newExpirationDate || !newExpirationDate.month || !newExpirationDate.year
        ) {
          showToast({ type: "error", message: "Please fill in all fields before saving." });
          return;
        }
        setCertificationData((prev) => [
            ...prev,
            {
              certName: newCertName,
              provider: newProvider,
              issueDate: {
                  month: newIssueDate.month,
                  year: newIssueDate.year,
                },
                expirationDate: {
                    month: newExpirationDate.month,
                    year: newExpirationDate.year,
                },
                certId: newCertId,
                certUrl: newCertUrl,
            },
          ]);
      
          // Show success toast
          showToast({ type: "success", message: "Certification added successfully!" });
        };
        const handleRemove = (index) => {
            const updatedData = certificationData.filter((_, i) => i != index);
            setCertificationData(updatedData);
            showToast({ type: "success", message: "Certification removed succesfully!"});
        };
  return (
    <ProfileCard
        header={<h3 className='font-semibold text-lg'>Certifications</h3>}
        body={
            <CertificationsBody
                viewOnly={viewOnly}
                certName={certName}
                certId={certId}
                certUrl={certUrl}
                provider={provider}
                issueDate={issueDate}
                expirationDate={expirationDate}
                setCertName={setCertName}
                setCertId={setCertId}
                setCertUrl={setCertUrl}
                setProvider={setProvider}
                setIssueDate={setIssueDate}
                setExpirationDate={setExpirationDate}
                handleSave={handleSave}
                handleRemove={handleRemove}
                certificationData={certificationData}
              />
        }
    />
    )
}

export default Certifications