-- Create courses table
CREATE TABLE IF NOT EXISTS public.courses (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  title text NOT NULL,
  progress integer NOT NULL DEFAULT 0,
  icon_name text NOT NULL,
  created_at timestamp with time zone DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Enable Row Level Security (RLS)
ALTER TABLE public.courses ENABLE ROW LEVEL SECURITY;

-- Create policy to allow public read access
CREATE POLICY "Allow public read access"
  ON public.courses
  FOR SELECT
  USING (true);

-- Insert mock data
INSERT INTO public.courses (title, progress, icon_name)
VALUES
  ('Advanced React Patterns', 75, 'Code2'),
  ('UI/UX Fundamentals', 30, 'PenTool'),
  ('Machine Learning Basics', 10, 'Brain'),
  ('System Architecture', 90, 'Server');
