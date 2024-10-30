import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbEllipsis,
  BreadcrumbPage,
  BreadcrumbList,
} from '@/components/ui/breadcrumb';
import React,{ useState, useEffect, useRef } from 'react';


function BreadCrumb({ path, className=''}) {
  const [isExpanded, setIsExpanded] = useState(false)
  const toggleExpand = () => setIsExpanded(!isExpanded)
  const segments = useRef([])
  useEffect(() => {
    if (path.endsWith('/')) {
      segments.current = path.slice(0, -1).replace(/[-/]/gi, " ").slice(1).split('/').filter(Boolean).map(segment => segment.charAt(0).toUpperCase() + segment.slice(1));
    } else {
      segments.current = path.replace(/[-]/gi, " ").slice(1).split('/').filter(Boolean).map(segment => segment.charAt(0).toUpperCase() + segment.slice(1));
    }
  }, [path])

  const renderBreadcrumbItems = (segmentArray) => {
    if (segmentArray.length <= 5 || isExpanded) {
      return segmentArray.map((path, index) => (
        <React.Fragment key={index}>
        <BreadcrumbItem >
          {index < segmentArray.length - 1 ? (
            <BreadcrumbLink asChild>
              <a href={`/${segmentArray.slice(0, index + 1).join('/')}`}>
                {path}
              </a>
            </BreadcrumbLink>
          ) : (
            <BreadcrumbPage className='text-[#0E4C25]'>{path}</BreadcrumbPage>
          )}
        </BreadcrumbItem>
        {index < segmentArray.length - 1 && <BreadcrumbSeparator/>}
        </React.Fragment>
      ))
    } else {
      return (
        <>
          <BreadcrumbItem >
            <BreadcrumbLink asChild>
              <a href="/">
                {segmentArray[0]}
              </a>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem >
            <BreadcrumbEllipsis onClick={toggleExpand} />
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          {segmentArray.slice(-2).map((path, index) => (
            <BreadcrumbItem key={index} >
              {index === 0 ? (
                <BreadcrumbLink asChild>
                  <a href={`/${segmentArray.slice(0, -1).join('/')}`} >
                    {path}
                  </a>
                </BreadcrumbLink>
              ) : (
                <BreadcrumbPage>{path}</BreadcrumbPage>
              )}
              {index === 0 && <BreadcrumbSeparator />}
            </BreadcrumbItem>
          ))}
        </>
      )
    }
  }

  return (
    <Breadcrumb className={`${className}`}>
      <BreadcrumbList>
        {renderBreadcrumbItems(segments.current)}
      </BreadcrumbList>
    </Breadcrumb>
  )
}

export default BreadCrumb;