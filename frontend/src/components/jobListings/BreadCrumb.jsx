import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbEllipsis,
  BreadcrumbPage,
  BreadcrumbList,
} from '@/components/ui/breadcrumb';
import React,{ useState } from 'react';


function BreadCrumb({ paths = []}) {
  const [isExpanded, setIsExpanded] = useState(false)
  const toggleExpand = () => setIsExpanded(!isExpanded)

  const renderBreadcrumbItems = () => {
    if (paths.length <= 5 || isExpanded) {
      return paths.map((path, index) => (
        <React.Fragment key={index}>
        <BreadcrumbItem >
          {index < paths.length - 1 ? (
            <BreadcrumbLink asChild>
              <a href={`/${paths.slice(0, index + 1).join('/')}`}>
                {path}
              </a>
            </BreadcrumbLink>
          ) : (
            <BreadcrumbPage>{path}</BreadcrumbPage>
          )}
        </BreadcrumbItem>
        {index < paths.length - 1 && <BreadcrumbSeparator/>}
        </React.Fragment>
      ))
    } else {
      return (
        <>
          <BreadcrumbItem >
            <BreadcrumbLink asChild>
              <a href="/">
                {paths[0]}
              </a>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem >
            <BreadcrumbEllipsis onClick={toggleExpand} />
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          {paths.slice(-2).map((path, index) => (
            <BreadcrumbItem key={index} >
              {index === 0 ? (
                <BreadcrumbLink asChild>
                  <a href={`/${paths.slice(0, -1).join('/')}`}>
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
    <Breadcrumb>
      <BreadcrumbList>
        {renderBreadcrumbItems(paths)}
      </BreadcrumbList>
    </Breadcrumb>
  )
}

export default BreadCrumb;