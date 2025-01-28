import * as LucideIcons from "lucide-react";

export const getIconComponent = (iconName: string) => {
  const IconComponent = LucideIcons[iconName as keyof typeof LucideIcons];
  return IconComponent ? <IconComponent /> : null;
};
