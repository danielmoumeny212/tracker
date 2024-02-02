import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger } from "@/components/ui/select";
import { cn } from "@/lib/utils";
import {Building2, FolderOpenDot, Play, Square, TimerIcon } from "lucide-react";
import { ActivityDuration } from "./duration";
import { Badge } from "@/components/ui/badge";
export interface Activity {
   id: string;
    name: string | null;
    startAt: Date;
    endAt: Date | null;
    createdAt: Date;
    updatedAt: Date;
    tenantId: string;
    userId: string;
    clientId: string | null;
    projectId: string | null;
}
interface NewActivityProps {
  activity?: Activity | null;
  clients: {name: string, id: string}[] 
  projects: {name: string, id: string}[]
}
const NewActivity = ({ activity, clients, projects }: NewActivityProps) => {
  return (
    <div>
        <h1 className="text-2xl font-semibold mb-2">What are you working on?</h1>
      <div className="flex justify-between items-center mb-6 gap-1">
        <div className="flex-1 space-x-2">
         <Input />
        </div>
        <div className="flex items-center space-x-4">
        <Select name="client">
            <SelectTrigger className="w-[50px]">
              <Building2 size={32} />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Client</SelectLabel>
                <SelectItem value="dd">None</SelectItem>
                {clients.map((client) => (
                  <SelectItem value={client.id} key={client.id}>
                    {client.name}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
          <Select name="project">
            <SelectTrigger className="w-[50px]">
              <FolderOpenDot size={32} />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Project</SelectLabel>
                <SelectItem value="jj">None</SelectItem>
                {projects.map((project) => (
                  <SelectItem value={project.id} key={project.id}>
                    {project.name}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        
        <div className="flex items-center space-x-4">

          <TimerIcon className="text-gray-500" />
          {activity && <ActivityDuration startAt={activity.startAt} />}
          <Button
            type="submit"
            variant="outline"
            className={cn('rounded-full px-2 h-[40px] w-[40px]')}
          >
            {activity ? <Square size={20} /> : <Play size={20} />}
          </Button>
        </div>
      </div>
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center space-x-2">
          <h2 className="text-lg font-semibold">TIMELINE</h2>
          <Badge variant="secondary">TODAY 3:29:00</Badge>
          <Badge variant="secondary">WEEK TOTAL 145:43:35</Badge>
        </div>
        <Button variant="outline">List view</Button>
      </div>
  </div>
  )
}

export default NewActivity