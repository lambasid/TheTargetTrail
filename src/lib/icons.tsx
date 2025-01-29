import * as LucideIcons from "lucide-react";
import { LucideProps } from "lucide-react";

export const getIconComponent = (iconName: string, props?: LucideProps) => {
  const IconComponent = LucideIcons[iconName as keyof typeof LucideIcons] as React.ElementType;
  
  if (!IconComponent) {
    console.warn(`Icon "${iconName}" not found in lucide-react.`);
    return null;
  }

  return <IconComponent {...(props as LucideProps)} />;
};
