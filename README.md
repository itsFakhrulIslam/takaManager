### Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props.

    React-এ এই ওয়ার্নিংটি তখনই দেখায় যখন আপনি একটি <select> ট্যাগের ভেতরে একই সাথে value এবং defaultValue দুটি প্রপস (props) ব্যবহার করেন। অথবা রেন্ডার হওয়ার সময় ভ্যালু undefined থেকে কোনো নির্দিষ্ট ভ্যালুতে পরিবর্তিত হয়।
    React-এর নিয়ম অনুযায়ী, একটি <select> এলিমেন্ট হয় পুরোপুরি Controlled (React state দ্বারা নিয়ন্ত্রিত) হতে হবে, নতুবা পুরোপুরি Uncontrolled (ব্রাউজারের DOM দ্বারা নিয়ন্ত্রিত) হতে হবে। দুটো একসাথে ব্যবহার করা যাবে না।
    সমাধানের জন্য নিচের যেকোনো একটি পদ্ধতি বেছে নিন:

    ১. Controlled Select ব্যবহার করুন (সবচেয়ে ভালো পদ্ধতি)

    যদি সিলেক্ট করার সাথে সাথে ভ্যালু নিয়ে কোনো কাজ করতে চান (যেমন—ভ্যালিডেশন বা অন্য কোনো ফিল্ড পরিবর্তন করা), তবে এই পদ্ধতি ব্যবহার করুন।
    • defaultValue মুছে ফেলুন। শুধুমাত্র value এবং onChange ব্যবহার করুন।
    • State-এ ডিফল্ট ভ্যালু দিন। প্রাথমিক বা ডিফল্ট ভ্যালুটি useState-এর ভেতরে সেট করুন।
    jsx
    import { useState } from 'react';

    function ControlledSelect() {
      // ডিফল্ট ভ্যালু এখানে দিন, defaultValue প্রপসে নয়
      const [fruit, setFruit] = useState('apple');

      return (
        <select value={fruit} onChange={(e) => setFruit(e.target.value)}>
          <option value="apple">Apple</option>
          <option value="banana">Banana</option>
          <option value="orange">Orange</option>
        </select>
      );
    }
    Use code with caution.

    ২. Uncontrolled Select ব্যবহার করুন

    যদি সাধারণ কোনো ফর্ম হয় এবং শুধুমাত্র ফর্ম সাবমিট করার সময় সিলেক্ট করা ভ্যালুটি প্রয়োজন হয়, তবে এটি ব্যবহার করুন।
    • value এবং onChange মুছে ফেলুন। শুধুমাত্র defaultValue রাখুন।
    • সাবমিট করার সময় ভ্যালু নিন। FormData বা useRef ব্যবহার করে ভ্যালু সংগ্রহ করুন।
    jsx
    function UncontrolledSelect() {
      const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        console.log(formData.get('fruit'));
      };

      return (
        <form onSubmit={handleSubmit}>
          <select name="fruit" defaultValue="apple">
            <option value="apple">Apple</option>
            <option value="banana">Banana</option>
            <option value="orange">Orange</option>
          </select>
          <button type="submit">Submit</button>
        </form>
      );
    }
    Use code with caution.

    আরও কিছু সাধারণ কারণ (যা চেক করা উচিত)

    আপনি যদি defaultValue না দিয়ে থাকেন তবুও এই এরর দেখায়, তবে নিচের বিষয়গুলো খেয়াল করুন:
    • API থেকে ডাটা লোড হওয়া: শুরুতে ডাটা না থাকায় value={data.category} যদি undefined থাকে এবং পরে ডাটা আসার পর ভ্যালু পায়, তবে এই এরর আসে। এটি ঠিক করতে ফলব্যাক ব্যবহার করুন: value={data?.category ?? ''}।
    • Props ছড়িয়ে দেওয়া (Spreading): কোনো ফর্ম লাইব্রেরি (যেমন React Hook Form) ব্যবহার করার সময় {...register('name')} এবং value একসাথে দিলে এই সমস্যা হয়।
    • <option> ট্যাগে selected লেখা: React-এ <option selected> ব্যবহার করা নিষিদ্ধ। সবসময় <select> ট্যাগে value বা defaultValue ব্যবহার করতে হয়।
    আপনি যদি আপনার <select> কোডটুকু শেয়ার করেন বা কোনো ফর্ম লাইব্রেরি (যেমন React Hook Form) ব্যবহার করছেন কি না জানান, তবে আমি সরাসরি আপনার কোডটি ঠিক করে দিতে পারি।
