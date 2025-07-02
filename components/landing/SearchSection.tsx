'use client';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search } from 'lucide-react';

const SearchSection = () => {
  return (
    <div className="w-full max-w-2xl rounded-lg bg-card p-4 shadow-lg">
      <Tabs defaultValue="find-nanny">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="find-nanny">Find a Nanny</TabsTrigger>
          <TabsTrigger value="check-availability">Check Availability</TabsTrigger>
          <TabsTrigger value="plan-trip">Plan Your Trip</TabsTrigger>
        </TabsList>
        <TabsContent value="find-nanny" className="mt-4">
          <div className="flex items-center space-x-2">
            <Input
              type="text"
              placeholder="Enter your hotel or postcode..."
              className="flex-grow"
            />
            <Button>
              <Search className="mr-2 h-4 w-4" /> Search
            </Button>
          </div>
        </TabsContent>
        <TabsContent value="check-availability" className="mt-4">
          {/* Placeholder for availability content */}
          <p className="text-center text-muted-foreground">
            Availability checker coming soon.
          </p>
        </TabsContent>
        <TabsContent value="plan-trip" className="mt-4">
          {/* Placeholder for trip planning content */}
          <p className="text-center text-muted-foreground">
            Trip planner coming soon.
          </p>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default SearchSection; 